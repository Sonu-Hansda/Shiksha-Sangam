
# Shiksha Sangam

An online educational platform for parents and teacher.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Sonu-Hansda/Shiksha-Sangam
```

Go to the project directory

```bash
  cd Shiksha-Sangam
```

Install dependencies

```bash
  npm install
```

Enter your mongodb url (index.js)

```bash
 mongoose.connect(
{/* <MONGO DB DATABASE URL GOES HERE> */})
  
```

Start the server

```bash
  npm run dev
```

## API Reference

#### Getting specific student details

Here you can search for a particular student in your database.
```http
  GET /student/:reg
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `reg` | `number` | **Required**. |

#### Getting all students record

Here you can search all students in your database.
```http
  GET /student/all
```

#### Create a student record
You can create a student record by sending post request to the give endpoint with json data format as given .
```http
  POST /student/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`      | `string` | First name of the student |
| `last_name`      | `string` | Last name of the student |
| `father_name`      | `string` | Father's name of the student |
| `mother_name`      | `string` | Mother's name of the student |
| `class`      | `number` | Class of the student |
| `roll_number`      | `number` | Roll number of the student |
| `registration_number`      | `number` | Registration number of the student |
| `contact_number`      | `number` | Contact Number of the student |
