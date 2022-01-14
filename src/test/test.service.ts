import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

    async handleTestMessageRequest(data: any): Promise<string> {
        console.log("handleTestMessageRequest log called: " + JSON.stringify(data));
        return `handleTestMessageRequest log echoing ${data.text}`;
    }
}
