import './TranslateBox.scss'

function TranslateBox() {
    return (
        <section className="translateBox">
            <div className="langSelect">
                <select>
                    <option value="">Select Language*</option>
                </select>
            </div>
            <div className="userInput">
                <textarea type="text" dir="auto"/>
            </div>
            <div className="cta">
                <button type="submit">Translate</button>
            </div>
        </section>
    );
}

export default TranslateBox;