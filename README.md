# typescript-api

## Roadmap
<details><summary>User Register</summary>

```mermaid
graph LR
A(UserCallsRegister) --> B{IsAlreadyRegistered?}
B -- No --> C[/SaveData/]
B -- Yes --> D[/Throw Error/]
C --> E(ReturnInfo)
D --> E
```

</details>
