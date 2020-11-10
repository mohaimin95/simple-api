const Student = require("../models/Student");
const { ObjectId } = require("mongoose").Types;
const methods = {};

let invalidObjectIdPromise = Promise.reject({ message: "Invalid student id !" });

methods.save = data => {
    let student = new Student({
        name: data.name.trim(),
        department: data.department.toUpperCase().trim(),
        tenthMark: +(data.tenthMark || 0),
        twelthMark: +(data.twelthMark || 0),
    });
    return student.save();
}

methods.get = () => Student.find();

methods.getById = _id => ObjectId.isValid(_id) ? Student.findById(_id) : invalidObjectIdPromise;

methods.update = (_id, obj) => ObjectId.isValid(_id) ? Student.updateOne({ _id }, { $set: obj }) : invalidObjectIdPromise;

methods.delete = _id => ObjectId.isValid(_id) ? Student.deleteOne({ _id }) : invalidObjectIdPromise;
module.exports = methods;