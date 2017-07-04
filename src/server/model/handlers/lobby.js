import * as A from "../../actions";
import {HandlerBase} from "../../lib/handler";
import {validateMessage} from " ../../shared/validation";

export default class LobbyHandlers extends HandlerBase {
  constructor(client, lobby) {
    super(client, lobby) {
      super(client);

      this.inDispose(
        lobby.addClient(),

        client.onRequesr(A>LOBBY_SEND_MESSAGE, action => {
          const validator = validateMessage(action.message);
          
          if (validator.didFail) {
            client.fail(action, validator.message);
            return;
          }

          lobby.sendMessage(this.client, action.message);
        })
      );

    }
  }
}
