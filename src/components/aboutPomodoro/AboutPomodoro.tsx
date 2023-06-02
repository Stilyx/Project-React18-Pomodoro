import React from 'react';

// Styles
import './AboutPomodoro.css';

// Interfaces
import {IAbout} from '../../interfaces/IAbout';

function AboutPomodoro({isHidden, setIsHidden, faQuestion}: IAbout): JSX.Element {
	return (
		<div>
			<button className='about-pomodoro' onClick={e => setIsHidden(e)}>
				{faQuestion}
			</button>
			<div className={isHidden ? 'text-container show-text-container' : 'text-container'}>
				<p className='about-text'>
					Ao ativar o <span>Auto</span>, o método pomodoro começará automaticamente.
				</p>
				<p className='about-text'>
					Você também pode manipular o pomodoro <span>Manualmente</span>.
				</p>
				<p className='about-text'>
					<span>O Método Pomodoro</span> é um método de gerenciamento de tempo baseado em períodos
					de 25 minutos (pomodoros) de estudo ou trabalho focado, interrompidos por intervalos de 5
					minutos. Após quatro intervalos de estudo consecutivos, são geralmente feitos intervalos
					mais longos.
				</p>
				<a
					href='https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro'
					className='about-text'
					target='_blank'
					rel='noreferrer'
				>
					Saiba Mais
				</a>
			</div>
		</div>
	);
}

export default AboutPomodoro;
