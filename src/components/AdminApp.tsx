// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import fakeDataProvider from 'ra-data-fakerest';
import { LogList } from "./LogList";
import authProvider from "@/authProvider";

const dataProvider = fakeDataProvider({
    logs: [
        {
            "host_name": "server1",
            "ip": "192.168.1.101",
            "os": "Ubuntu 20.04",
            "timestamp": "2024-02-18T08:00:00",
            "location": "Datacenter A",
            "owner": "John Doe"
        },
        {
            "host_name": "server2",
            "ip": "192.168.1.102",
            "os": "CentOS 7",
            "timestamp": "2024-02-18T08:05:00",
            "location": "Datacenter B",
            "owner": "Jane Smith"
        },
        {
            "host_name": "server3",
            "ip": "192.168.1.103",
            "os": "Windows Server 2019",
            "timestamp": "2024-02-18T08:10:00",
            "location": "Datacenter C",
            "owner": "Michael Johnson"
        },
        {
            "host_name": "server4",
            "ip": "192.168.1.104",
            "os": "Debian 10",
            "timestamp": "2024-02-18T08:15:00",
            "location": "Datacenter A",
            "owner": "Emily Brown"
        },
        {
            "host_name": "server5",
            "ip": "192.168.1.105",
            "os": "Red Hat Enterprise Linux 8",
            "timestamp": "2024-02-18T08:20:00",
            "location": "Datacenter B",
            "owner": "David Wilson"
        },
        {
            "host_name": "server6",
            "ip": "192.168.1.106",
            "os": "macOS Catalina",
            "timestamp": "2024-02-18T08:25:00",
            "location": "Datacenter C",
            "owner": "Sarah Taylor"
        },
        {
            "host_name": "server7",
            "ip": "192.168.1.107",
            "os": "Ubuntu 18.04",
            "timestamp": "2024-02-18T08:30:00",
            "location": "Datacenter A",
            "owner": "Robert Martinez"
        },
        {
            "host_name": "server8",
            "ip": "192.168.1.108",
            "os": "Windows Server 2016",
            "timestamp": "2024-02-18T08:35:00",
            "location": "Datacenter B",
            "owner": "Karen Garcia"
        },
        {
            "host_name": "server9",
            "ip": "192.168.1.109",
            "os": "CentOS 8",
            "timestamp": "2024-02-18T08:40:00",
            "location": "Datacenter C",
            "owner": "Daniel Rodriguez"
        },
        {
            "host_name": "server10",
            "ip": "192.168.1.110",
            "os": "Windows 10",
            "timestamp": "2024-02-18T08:45:00",
            "location": "Datacenter A",
            "owner": "Jennifer Hernandez"
        }
        // Continue with more entries...
    ]

    // comments: [
    //     { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
    //     { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
    // ],
})



const AdminApp = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>3
        <Resource
            name="logs"
            list={LogList}
            edit={EditGuesser}
            recordRepresentation="id"
        />
        {/* <Resource
            name="posts"
            list={ListGuesser}
            edit={EditGuesser}
            recordRepresentation="title"
        />
        <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
    </Admin>
);

export default AdminApp;