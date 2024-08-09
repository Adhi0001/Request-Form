
const WorkAssignment= require('../models/models/data_entry/workassignment.model')


exports.mywork = (req, res) => {
   
    if (!req.body.actionRequired) {
        return res.status(400).json({ message: "Action Required Cannot be empty" });
    }
    if (!req.body.status) {
        return res.status(400).json({ message: "Status Cannot be empty" });
    }
    if (!req.body.closureResponsibleMember) {
        return res.status(400).json({ message: "Closure Responsible Member Cannot be empty" });
    }
    if (!req.body.forecastDateOfClosure) {
        return res.status(400).json({ message: "ForeCast Date of Closure Cannot be empty" });
    }
    if (!req.body.actualDateOfClosure) {
        return res.status(400).json({ message: "Actual Date of Closure Cannot be empty" });
    }
    if (!req.body.remarks) {
        return res.status(400).json({ message: "Remarks Cannot be empty" });
    }

    
    let uniqueId = 2407160001; 

    const newDocument = new WorkAssignment ({
        uniqueId: uniqueId,
        actionRequired: req.body.actionRequired,
        createdDate: new Date(), 
        createdBy: req.body.createdBy,
        status: req.body.status,
        closureResponsibleMember: req.body.closureResponsibleMember,
        forecastDateOfClosure: req.body.forecastDateOfClosure,
        actualDateOfClosure: req.body.actualDateOfClosure,
        remarks: req.body.remarks
    });

    newDocument
        .save(newDocument)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while saving the document"
            });
        });
};



