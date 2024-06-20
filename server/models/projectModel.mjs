import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});


const ProjectModel = model('Project', projectSchema);

export default ProjectModel;