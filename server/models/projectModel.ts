import { Schema, model, Document } from 'mongoose';

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


interface IProject extends Document {
    title: string;
    description: string;
    status: string;
}


const ProjectModel = model<IProject>('Project', projectSchema);

export default ProjectModel;