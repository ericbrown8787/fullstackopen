const PersonForm = ({
  newName,
  newNumber,
  handleNewNameChange,
  handleNewNumberChange,
  addPerson,
}) => {
  return (
    <form>
      <div>
        name: <input required value={newName} onChange={handleNewNameChange} />
      </div>
      <div>
        number:{" "}
        <input required value={newNumber} onChange={handleNewNumberChange} />
      </div>
      <div>
        <button type="submit" onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
