import React, { useState } from 'react';
import axios from 'axios';
import './mywork.css';

const Mywork = () => {
    const [formData, setFormData] = useState({
        actionRequired: '',
        createdBy: '',
        closureResponsibleMember: '',
        forecastDateOfClosure: '',
        actualDateOfClosure: '',
        remarks: '',
        status: 'OPEN',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);
        try {
            const response = await axios.post('http://localhost:5786/api/mywork', formData);
            console.log('Request created:', response.data);
            setSuccess(true);
            setFormData({
                actionRequired: '',
                createdBy: '',
                closureResponsibleMember: '',
                forecastDateOfClosure: '',
                actualDateOfClosure: '',
                remarks: '',
                status: 'OPEN',
            });
        } catch (error) {
            console.error('Failed to create request', error);
            setError('Failed to create request');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="mywork-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Action Required</label>
                <textarea
                    name="actionRequired"
                    placeholder="Action Required"
                    value={formData.actionRequired}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Created By</label>
                <input
                    type="text"
                    name="createdBy"
                    placeholder="Created By"
                    value={formData.createdBy}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Closure Responsible Member</label>
                <select
                    name="closureResponsibleMember"
                    value={formData.closureResponsibleMember}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Member</option>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                </select>
            </div>
            <div className="form-group">
                <label>Forecast Date Of Closure</label>
                <input
                    type="date"
                    name="forecastDateOfClosure"
                    value={formData.forecastDateOfClosure}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label>Actual Date Of Closure</label>
                <input
                    type="date"
                    name="actualDateOfClosure"
                    value={formData.actualDateOfClosure}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Remarks</label>
                <textarea
                    name="remarks"
                    placeholder="Remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="OPEN">OPEN</option>
                    <option value="INPROGRESS">IN PROGRESS</option>
                    <option value="CLOSED">CLOSED</option>
                    <option value="CANCELLED">CANCELLED</option>
                    <option value="HOLD">HOLD</option>
                    <option value="INVALID">INVALID</option>
                </select>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Request created successfully!</p>}
        </form>
    );
};

export default Mywork;
