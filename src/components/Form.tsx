import { useFormInput } from 'hooks/useFormInput';

const INIT_DATA = {
  name: '',
  surname: '',
  age: 0,
};

export function Form() {
  const [data, updateData] = useFormInput(INIT_DATA);

  return (
    <>
      <label>
        Name :
        <input type="text" value={data.name} onChange={e => updateData({ name: e.target.value })} />
      </label>
      <label>
        Surname :
        <input
          type="text"
          value={data.surname}
          onChange={e => updateData({ surname: e.target.value })}
        />
      </label>
      <label>
        Age :
        <input
          type="number"
          value={data.age}
          min={0}
          max={99}
          onChange={e => updateData({ age: parseInt(e.target.value) || 0 })}
        />
      </label>
      <br />
      <table style={{ border: '2px solid #555', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>

            <th>Surname</th>

            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #bbb', textAlign: 'center' }}>{data.name}</td>
            <td style={{ border: '1px solid #bbb', textAlign: 'center' }}>{data.surname} </td>
            <td style={{ border: '1px solid #bbb', textAlign: 'center' }}>{data.age}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
