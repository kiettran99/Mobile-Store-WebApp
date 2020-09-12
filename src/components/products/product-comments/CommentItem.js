import React, { useMemo, useState } from 'react';
// import moment from 'moment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const CommentItem = ({ comment: { name, text, date } }) => {

    const [relativeTime, setRelativeTime] = useState('');

    useMemo(() => {
         setRelativeTime(dayjs(date).fromNow());
    }, [date]);

    return (
        <div className="container shadow-sm p-2 mt-2 rounded">
            <div className="row">
                <div className="col-md-0 p-2 ml-3 mt-2">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" className="circle rounded" width="35" />
                </div>


                <div className="col-md-10 col-sm-10 col-9 p-3 rounded">
                    <div className="bg-light p-2">
                        <p className="m-0 ml-3">{name}</p>
                        <p className="text-muted ml-3">{text}</p>
                    </div>

                    <div className="rounded text-muted mt-1">
                        <p className="d-inline">{relativeTime}</p>
                        <p className="d-inline ml-3">Like</p>
                        <p className="d-inline ml-3">Reply</p>
                        <p className="d-inline ml-3">Remove</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default CommentItem;