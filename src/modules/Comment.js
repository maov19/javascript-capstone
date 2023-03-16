import { v4 as uuidv4 } from 'uuid'

class Comment {
    constructor() {
        this.appId = 'VASVN7B36M4wHn663o4j';
        this.baseURL = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi";
    }

    async postComment(username, comment) {
        const url = `${this.baseURL}/apps/${this.appId}/comments`;
        const item_id = uuidv4()
        console.log(item_id)
        const body = { item_id, username, comment };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`Failed to create comment: ${response.status}`);
            }
            return response.status;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to create comment');
        }
    }
}

export default Comment