import React, { FC } from 'react'
import { BaseToast, default as RnToast } from 'react-native-toast-message'

const options = (primaryColor: string) => ({
	style: { backgroundColor: '#080808', borderLeftColor: primaryColor },
	text1Style: { color: '#fff', fontSize: 16 },
	text2Style: { fontSize: 14 }
})

const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			config={{
				success: props => <BaseToast {...props} {...options('#67E769')} />,
				info: props => <BaseToast {...props} {...options('#67E769')} />,
				error: props => <BaseToast {...props} {...options('#67E769')} />
			}}
		/>
	)
}

export default Toast