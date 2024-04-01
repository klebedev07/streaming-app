import Button from '@/components/ui/button/Button'
import { FC } from 'react'
import { Text, View } from 'react-native'

const VideoPlayer: FC<{ video: string }> = ({ video }) => {
	return (
		<>
			<Button icon='play' className='mb-6'>
                Watch movie
            </Button>
		</>
	)
}

export default VideoPlayer
