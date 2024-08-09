const mongoose = require('mongoose');

const workAssignmentSchema = new mongoose.Schema({
    uniqueId: { type: String},
    actionRequired: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    createdBy: { type: String, },
    status: { type: String, enum: ['OPEN', 'INPROGRESS', 'CLOSED', 'CANCELLED', 'HOLD', 'INVALID'], default: 'OPEN' },
    closureResponsibleMember: { type: String},
    foreCastDateOfClosure: { type: Date },
    actualDateOfClosure: { type: Date },
    remarks: { type: String },
    modifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    modifiedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('workassignment', workAssignmentSchema);
