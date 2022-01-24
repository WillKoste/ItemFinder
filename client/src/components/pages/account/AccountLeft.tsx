import React, {useState, Dispatch, SetStateAction} from 'react';

interface AccountLeftProps {
	setSection: Dispatch<SetStateAction<number>>;
	section: number;
}

const AccountLeft: React.FC<AccountLeftProps> = ({setSection, section}) => {
	const [tabs] = useState([
		{id: 1, name: 'Contacts'},
		{id: 2, name: 'Partners'},
		{id: 3, name: 'Credit Cards'}
	]);

	return (
		<div className='account-left'>
			<ul>
				{tabs.map((tab) => (
					<li style={{background: section === tab.id ? '#c0c0c0' : 'inherit'}} key={tab.id} onClick={() => setSection(tab.id)}>
						{tab.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AccountLeft;
