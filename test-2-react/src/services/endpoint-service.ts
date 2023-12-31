interface EndpointServiceReturnType {
    post: ({ email }: { email: string }) => Promise<{ ok: boolean, message: string }>;
}

export const EndpointService = (): EndpointServiceReturnType => {
    return {
        post: async (body) => {
            try {
                const response = await fetch('http://localhost:4040/endpoint', { 
                    method: 'POST', 
                    body: JSON.stringify(body), 
                    headers: { 'Content-Type': 'application/json' },
                    mode: 'cors',
                })
                return response.json()
            } catch (e) {
                throw e
            }            
        },
    }
}