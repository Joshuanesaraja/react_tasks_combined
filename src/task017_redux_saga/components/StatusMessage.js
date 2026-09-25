import { useSelector } from "react-redux";

function StatusMessage() {
    const status = useSelector(
        (state) => state.status
    );

    const networkStatus = useSelector(
        (state) => state.networkStatus
    );

    return (
        <div className="task017-header-status">

            <div className="task017-status-box">
                <span className="task017-status-label">
                    Network
                </span>

                <div className="task017-network-value">
                    <span
                        className={
                            networkStatus
                                ? "task017-network-dot task017-online-dot"
                                : "task017-network-dot task017-offline-dot"
                        }
                    />

                    <span
                        className={
                            networkStatus
                                ? "task017-online-text"
                                : "task017-offline-text"
                        }
                    >
                        {networkStatus
                            ? "Online"
                            : "Offline"}
                    </span>
                </div>
            </div>

            <div className="task017-status-divider" />

            <div className="task017-status-box task017-message-box">
                <span className="task017-status-info-icon">
                    i
                </span>

                <div>
                    <span className="task017-status-label">
                        Status
                    </span>

                    <strong>
                        {status}
                    </strong>
                </div>
            </div>

        </div>
    );
}

export default StatusMessage;