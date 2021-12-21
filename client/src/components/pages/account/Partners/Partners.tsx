import React, {useEffect, useState, useMemo} from 'react';
import {connect} from 'react-redux';
import {getPartners} from '../../../../actions/partners';
import Table from '../../../../Reusable/Table';
import {PartnersReducer, RootRedTypes} from '../../../../types/general';
import {Column} from '../../../../types/table';

interface PartnersProps {
	partnersRed: any;
	getPartners: () => void;
}

const Partners: React.FC<PartnersProps> = ({partnersRed: {partners}, getPartners}) => {
	const [partnersData, setPartnersData] = useState([]);

	useEffect(() => {
		getPartners();
	}, []);
	useEffect(() => {
		setPartnersData(partners);
	}, [partners]);

	const data = useMemo(() => partnersData, [partnersData]);

	const columns: Column[] = useMemo(
		() => [
			{
				id: 1,
				header: 'ID',
				accessor: 'id'
			},
			{
				id: 2,
				header: 'Organization Name',
				accessor: 'name'
			},
			{
				id: 3,
				header: 'Partner Code',
				accessor: 'partner_code'
			},
			{
				id: 4,
				header: 'Created On',
				accessor: 'created_at'
			}
		],
		[]
	);

	return (
		<div>
			<h2 className='account-header'>Partners</h2>
			<Table columns={columns} data={data} />
		</div>
	);
};

const mapStateToProps = (state: RootRedTypes) => ({
	partnersRed: state.partnersRed
});

export default connect(mapStateToProps, {getPartners})(Partners);
