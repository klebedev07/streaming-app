import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const { mutate: loginSync, isLoading: isLoginLoading } = useMutation({
		mutationKey: ['login'],
		mutationFn: ({ email, password }: IAuthFormData) => AuthService.main('login', email, password),
		onSuccess: (data) => {
		  setTimeout(() => { 
			reset();
			setUser(data.user);
		  });
		
		},
		onError: (er) => console.log(er)
	  });

	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation({
		mutationKey: ['register'],
		mutationFn: ({ email, password }: IAuthFormData) => AuthService.main('reg', email, password),
		onSuccess: (data) => {
		  setTimeout(() => {
			reset();
			setUser(data.user);
		  });
		},
	  });

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
