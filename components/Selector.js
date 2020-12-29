export default function Selector({ onChange, value, text }) {
    return (
        <>
            <select className='wid100' onChange={onChange} value={value}>
                {text}
            </select>
        </>
    );
}
