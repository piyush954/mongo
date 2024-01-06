const Loading = (props) => {
    return (
        <>
            <div className="text-start">
                <p className="fw-bold fs-5">{props.Heading}</p>
            </div>
            <div className="d-flex">
                <p className="mb-0">75%</p>
                <div
                    className="progress flex-fill mx-3 rounded-5"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div className="progress-bar w-75 progress-bar-striped progress-bar-animated rounded-5">
                        75%
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
