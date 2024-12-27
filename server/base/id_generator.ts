
export enum Model {
    USER = 1,
    TODO,
}

const prefixes: Record<Model, string> = {
    [Model.USER]: 'U',
    [Model.TODO]: 'T',
}

export class IdGenerator {

    generateId(model: Model): string {
        return prefixes[model] + Date.now().toString(36) + (Math.round(Math.random() * 100)).toString(36).padStart(2, '0');
    }

}
