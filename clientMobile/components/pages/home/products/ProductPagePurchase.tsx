import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Button from '../../../reusable/buttons/Button';
import CheckBox from '@react-native-community/checkbox';

interface ProductPagePurchaseProps {}

const ProductPagePurchase: React.FC<ProductPagePurchaseProps> = () => {
	const [deliveryOption, setDeliveryOption] = useState(1);

	const checkboxes: {
		id: number;
		label: string;
		onSelect: () => void;
	}[] = [
		{
			id: 1,
			label: 'Premium, 1 day',
			onSelect: () => setDeliveryOption(1)
		},
		{
			id: 2,
			label: 'Expedite, 2 day',
			onSelect: () => setDeliveryOption(2)
		},
		{
			id: 3,
			label: 'Default, 3 day',
			onSelect: () => setDeliveryOption(3)
		},
		{
			id: 4,
			label: 'Snail Mail',
			onSelect: () => setDeliveryOption(4)
		}
	];

	return (
		<View style={{borderColor: '#cecece', borderWidth: 2, borderStyle: 'solid', padding: 12, borderRadius: 10, marginVertical: 12}}>
			<Button iconProps={{}} btnText='Add To Cart' btnVariant='primary' btnFont={18} btnBorderRadius={14} />
			<Button iconProps={{}} btnText='Buy Now' btnVariant='secondary' btnFont={18} btnBorderRadius={14} />
			<Button iconProps={{name: 'heart'}} btnText='Favorite This Item' btnVariant='light' btnFont={18} btnBorderRadius={14} />
			<FlatGrid
				data={checkboxes}
				renderItem={({item}) => (
					<View style={[{flexDirection: 'row', alignItems: 'center'}]}>
						<CheckBox onChange={item.onSelect} value={deliveryOption === item.id} />
						<Text>{item.label}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default ProductPagePurchase;
