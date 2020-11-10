const studentController = require("../controllers/student.controller");
const router = require("express").Router();

router.get("/", (req, res) => {
    studentController.get().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
});
router.get("/:id", (req, res) => {
    studentController.getById(req.params.id).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(500).send(err);
    })
});
router.put("/:id", (req, res) => {
    studentController.update(req.params.id, req.body).then(() => {
        res.send({ message: "Updated successfully !" });
    }).catch(err => {
        res.status(500).send(err);
    })
});
router.delete("/:id", (req, res) => {
    studentController.delete(req.params.id).then(() => {
        res.send({ message: "Deleted successfully !" });
    }).catch(err => {
        res.status(500).send(err);
    })
});

router.post("/", (req, res) => {
    studentController.save(req.body).then(docs => {
        res.send({ message: "Added successfully !",document:docs });
    }).catch(err => {
        res.status(500).send(err);
    })
});


module.exports = router;