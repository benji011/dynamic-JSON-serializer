<p align="center">
  <img src="logo.jpg"/>
</p>

## How to run

```bash
yarn && yarn start
```

## Running unit tests

```bash
yarn tests
```

# Links

Medium article [here](https://benjaminlo-dev.medium.com/modifying-a-json-in-typescript-dynamically-based-on-some-instance-type-4748a7c74809)

# Objective

1. Return JSON with modified values.
2. Slug some string value from a sample JSON, dynamically.

## The problem - Dynamically modify some JSON output

In this scenario your client wants some JSON representation modified from some integer to a string. A common example might be the sample response below:

```json
{
  "id": 1,
  "name": "Alice",
  "gender": 0,
  "occupation": "Frontend Developer",
  "achievements": "Wrote the front end"
}
```

In the above example, `gender` can either be a `0` for female, `1` for male and `2` for non-binary. This data would've been fetched from some backend DB as a record where `gender` is configured to be an integer value.

The client would also like to reformat the value of `occupation` to be slugged and lowercased. e.g. "Frontend Developer" → "frontend-developer"

Unfortunately, the clients DB is already populated with hundreds of records and is not willing to update or add any new tables. We need to instead modify the response JSON as time is an asset we don't have.

Also take note that not all JSON data should be modified the same way, for example the client wants to slug `occupation` for some members of staff except the sales team, where instead their `achievements` value should be changed instead. Why? don't know but we can do this anyway without a problem.

# Returning a JSON with modified values - The solution

Since we have JSON, we can feed it into some method that accepts a custom interface, modify a JSONs value and return a copy of it back.

### Our interface

```typescript
export default interface IStaff {
  id: number
  name: string
  gender: number
  occupation: string
  achievements: string
  getDescription(): string
}
```

Now we can create a `generateSlug` method that accepts the original JSON as type `IStaff`

```typescript
export const generateSlug = (data: IStaff): string => {
  // ...
}
```

We then create a method `addGenderString` to convert the `gender` number type as a string using a simple switch statement. If we happen to receive an unknown `gender` number or some other data type, we throw an error that this id isn't valid

```typescript
export const addGenderString = (gender: number): string | Error => {
  switch (gender) {
    case 0:
      return 'male'
    case 1:
      return 'female'
    case 2:
      return 'non-binary'
    default:
      throw new Error(`${gender} is not a valid gender ID`)
  }
}
```

Our logic to slug the sample datas `occupation` value can be done using some regex and string manipulation

```typescript
occupation: data.occupation
  .toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '')
```

The result method now looks like:

```typescript
export const generateSlug = (data: IStaff): string => {
  return JSON.stringify({
    ...data,
    gender: addGenderString(data.gender),
    occupation: data.occupation
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, ''),
  })
}
```

# Slug some string value from a sample JSON, dynamically - The solution

But what about modifying a member of staff object? Easy, Use a `map`, set the instance and then just use another switch and check its instance type:

```typescript
// Some object of type Developer
const alice: Developer = new Developer(
  1,
  'Alice',
  1,
  'Frontend developer',
  'deploying to the frontend via ArgoCD'
)

// Create a map, then set the instance like so
export const verifiedMembersOfStaff: Map<IStaff, unknown> = new Map()
// Set the map
verifiedMembersOfStaff.set(alice, Developer)

// Use maps `get` method to get that instance
switch (verifiedMembersOfStaff.get(staff)) {
  case Developer:
    return printSlug(generateDeveloperSlug(json as IStaff))
  case Management:
    return printSlug(generateOccupationSlug(json as IStaff))
  case Sales:
    return printSlug(generateAchievementsSlug(json as IStaff))
  default:
    throw new Error(`Exausted list, ${staff} does not exist.`)
}
```

### Final result

```json
{
  "id": 1,
  "name": "Alice",
  "gender": "female",
  "occupation": "frontend-developer",
  "achievements": "deploying to the frontend via ArgoCD"
}
{
  "id": 2,
  "name": "Bob",
  "gender": "male",
  "occupation": "backend-developer",
  "achievements": "decoupling backend services as loosely coupled microservices"
}
{
  "id": 3,
  "name": "Cassandra",
  "gender": "female",
  "occupation": "human-resources",
  "achievements": "hiring a Lead Senior Engineer"
}
{
  "id": 4,
  "name": "Daniel",
  "gender": "male",
  "occupation": "sales consultant of some company",
  "achievements": "kpi-of-200"
}
```

You can also slug other values like `achievements` which is what I've done with Daniel here:

```json
{
  "id": 4,
  "name": "Daniel",
  "gender": "male",
  "occupation": "sales consultant of some company",
  "achievements": "kpi-of-200"
}
```

You can see it's actually pretty easy to modify a value dynamically. Now we have satisfied all the conditions the client has asked for.
