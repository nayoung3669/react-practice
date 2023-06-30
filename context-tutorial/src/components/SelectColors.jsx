import { ColorConsumer } from "../contexts/color"

function SelectColors() {
    const colors = ['red', 'orange', 'yellow', 'green','blue']
  return (
    <div>
        <h2>색상 선택</h2>
        <ColorConsumer>
            {({actions}) => {
                return (
                    <div style={{display: "flex"}}>
                        {colors.map(color => {
                            return <div
                                key={color}
                                style={{
                                    background: color,
                                    width: "24px",
                                    height: "24px",
                                    cursor: "pointer",
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault();
                                    actions.setSubColor(color)
                                }}
                            >
                            </div>
                        })}
                    </div>
                )
            }}
        </ColorConsumer>
    </div>
  )
}

export default SelectColors