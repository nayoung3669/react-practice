import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
    return (
            <ColorConsumer>
                {({ state }) => (
                    <>
                        <div style={{height: "64px", width: "64px", margin: "10px", backgroundColor: state.color}} />
                        <div style={{height: "32px", width: "32px", margin: "10px", backgroundColor: state.subColor}}/>
                    </>
                )}
            </ColorConsumer>
        )
}

export default ColorBox