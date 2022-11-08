import { RoomWidgetPollUpdateEvent } from '../../../../api';
import { usePollWidget, useUiEvent } from '../../../../hooks';

export const RoomPollView = () => 
{
    const {} = usePollWidget();
    
    useUiEvent<RoomWidgetPollUpdateEvent>(RoomWidgetPollUpdateEvent.OFFER, event => 
    {
        console.log(event);
    });

    useUiEvent<RoomWidgetPollUpdateEvent>(RoomWidgetPollUpdateEvent.CONTENT, event => 
    {
        console.log(event);
    });
    
    return null;
}
