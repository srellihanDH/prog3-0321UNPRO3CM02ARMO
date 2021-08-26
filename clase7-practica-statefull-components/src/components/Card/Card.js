/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMore: false,
        }
    }

    viewMore(evento) {
        // No hace falta que el método viewMore reciba un parametro (evento) para resolver la ejercitación. Lo podemos sacar de acá y de las funciones que están como valor del onClick. Lo dejo para que les quede el ejemplo que dimos anteriormente

        // Ejemplo dado al principio para mostrar como podríamos rescatar el evento y todas sus propiedades. Lo usamos para rescatar el valor que había dentro de la etiqueta de apertura y clausura de nuestra etiqueta p al momento de accionar el evento onClick
        // alert(evento.target.textContent);

        if (this.state.viewMore) {
            // El método setState es asincrónico. Por ende, si queremos indicar el estado después de que se volvió a setInterval, tenemos que hacerlod e la siguiente forma
            // this.setState({
            //     viewMore: false
            // }, () => {
            //     alert(this.state.viewMore) 
            // });
            this.setState({
                viewMore: false,
            });
        } else {
            this.setState({
                viewMore: true,
            });
        }
    }

    render() {
        return (
            <div className="character-card">
                <img src={`${this.props.image}`} alt="" />
                <h4>{this.props.name}</h4>
                <p>Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae molestias? Deleniti vel suscipit voluptatem mollitia vitae. Placeat, incidunt?</p>
                <p className={ this.state.viewMore ? '' : 'hide' }>Universo: {this.props.extra}</p>
                <p className='more' onClick={(evento) => this.viewMore(evento)} >Ver más</p>
            </div>
        );
    }
}

export default Card