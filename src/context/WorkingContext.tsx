import React, {useState} from 'react';
import {createContext} from 'react';

// interface
import {IWork} from '../interfaces/IWork';

interface WorkingContextProps {
	children: React.ReactNode;
}

export const WorkingContext = createContext({} as IWork);

function WorkingProvider({children}: WorkingContextProps) {
	const [working, setWorking] = useState<boolean>(false);
	const [rest, setRest] = useState<boolean>(false);
	return (
		<WorkingContext.Provider value={{working, setWorking, rest, setRest}}>
			{children}
		</WorkingContext.Provider>
	);
}

export default WorkingProvider;
