import { useEffect } from 'react';
import pusher from '../../../utils/pusher/pusher';

const useNotificationPusher = (isAuthenticated, loadNotification) => {
    useEffect(() => {
        if (isAuthenticated) {
            const updateEvents = (data) => {
                loadNotification();
            };

            const channel = pusher.subscribe('app_notifications');

            channel.bind('notification', updateEvents);

            return () => {
                channel.unbind();
                pusher.unsubscribe(channel);
            };
        }
    }, [isAuthenticated]);
};

export default useNotificationPusher;