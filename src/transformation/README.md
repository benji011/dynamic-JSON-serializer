## The problem - Dynamically change a JSON output

Transform a JSON object dynamically with new typed values of a field. e.g.

Assuming some class instance is based off the same model/interface `IStaff`, but depending on implemented instance of that model the value of that JSON varies.

e.g.

```javascript
interface Model {
    id: string
    name: string
    gender: string
    occupation: string
}
```

### Frontend developer

```json
{
  "id": 1,
  "name": "Alice",
  "gender": 0,
  "occupation": "Frontend Developer"
}
```

### Backend developer

```json
{
  "id": 2,
  "name": "Bob",
  "gender": 1,
  "occupation": "Backend Developer"
}
```

## The solution

Create a map `verifiedDevelopers` and set a developer into it with its instance type. Note that the value type of map is set to unknown. This is fine because in the real world we won't know what this type would be anyway.

```javascript
export const verifiedDevelopers: Map<IStaff, unknown> = new Map()
verifiedDevelopers.set(alice, FrontendDev)
verifiedDevelopers.set(bob, BackendDev)
```

## Output

```bash
{"id":1,"name":"Alice","gender":0,"occupation":"frontend-developer"}
{"id":2,"name":"Bob","gender":2,"occupation":"backend-developer"}
```

### References

See [serialize-JSON](../../serialize-JSON) & [dynamic-instance-check](../)
