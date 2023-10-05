// client.ts
import { createClient } from 'next-sanity'

const client = createClient({
    projectId: 'tlnrjbl4', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2021-10-21', // use a UTC date string
})

export default client