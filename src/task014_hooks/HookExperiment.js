import { useRef, useState } from "react";

function HookExperiment() {
    const [stateValue, setStateValue] = useState("");
    const refValue = useRef();

    console.log("Component Rendered");

    return (
        <section className="task014-card">
            <h2>useState vs useRef</h2>

            <label>
                useState Input

                <input
                    type="text"
                    value={stateValue}
                    onChange={(event) => setStateValue(event.target.value)}
                    placeholder="Type using useState"
                />
            </label>

            <label>
                useRef Input

                {/* When we type into this input, we're not calling a state setter.
                The value belongs to the DOM input. */}

                <input
                    type="text"
                    ref={refValue}
                    placeholder="Type using useRef"
                />
            </label>
        </section>
    );
}

export default HookExperiment;