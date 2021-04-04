const ProgressIndicator = ({ percent }) => (
    <div className="div-progress">
        <div 
            className="percent-progress" 
            style={{ width: `${ percent }vw` }}>
        </div>
    </div>
)

export default ProgressIndicator;