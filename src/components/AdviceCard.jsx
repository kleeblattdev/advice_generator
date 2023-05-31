import './adviceCard.scss';

const AdviceCard = ({advice, setAdvice}) => {
    const newAdvice = () =>{
        fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => setAdvice(data))
    }

    return <section>
        <h1>Advice #{advice?.slip?.id}</h1>
        <p>"{advice?.slip?.advice}"</p>
        <div>
        </div>
        <button onClick={newAdvice}></button>
    </section>
}

export default AdviceCard;