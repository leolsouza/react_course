import classes from './Card.module.css';

function Card(props)
{
    return <div className={classes.card}>{props.children}</div>
}

export default Card;

/* childern é um props especial que todos os elementos já o contem por padrão 
logo se chama-los, tudo que estiver entre as tags Card, será apresentado*/