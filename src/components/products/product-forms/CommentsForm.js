import React, { useState } from 'react';

const CommentsForm = () => {

    const [text, setText] = useState('');

    return (
        <div className="shadow-sm p-2 bg-light mt-2 rounded">
            <form>
                <div className="row">
                    <div className="col-0 form-group ml-4">
                        <img src={"https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"}
                            className="circle rounded" width={35} />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-9 col-sm-8 col-7 form-group">
                        <textarea className="form-control"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Write comment here ...." />
                    </div>

                    <div className="col-1 form-group">
                        <button className="btn btn-primary" type="submit">
                            Submit
                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommentsForm;