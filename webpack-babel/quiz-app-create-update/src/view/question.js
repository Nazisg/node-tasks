import { generateId } from "../helpers/idGenerator.js";
import { getAllQuestions, insertQuestion, deleteQuestion, updateQuestion } from "../requests/insertQuestion.js";

const tblQuestionBody = document.querySelector('#tblQuestion tbody')
const btnQuestionSave = document.getElementById('btnQuestionSave')
const txtQuestionText = document.getElementById('txtQuestionText')
const txtQuestionSubjectName = document.getElementById('txtQuestionSubjectName')

export const bindQuestions = async () => {
    const questionsData = await getAllQuestions();
    createQuestionTable(questionsData)
}

export const initalizeQuestions = async () => {
    addQuestionEvents()
    await bindQuestions()
}

const addQuestionEvents = () => {
    btnQuestionSave.addEventListener('click', insertQuestionItem)
}

const insertQuestionItem = async () => {
    const allQuestions = await getAllQuestions();
    const questionsText = txtQuestionText.value
    const subjectName = txtQuestionSubjectName.value
    const id = generateId(allQuestions)

    const row = {
        id,
        questionsText,
        subjectName
    }

    await insertQuestion(row)

    bindQuestions()
    
    txtQuestionText.value = '';
    txtQuestionSubjectName.value = '';
}

const deleteQuestionRow = async (e) => {
    const id = e.target.dataset.rowId;
    await deleteQuestion(id)
    await bindQuestions()
}

const createQuestionTable = rows => {
    tblQuestionBody.innerHTML = ''
    rows.forEach(row => {
        const tr = createRow(row)
        tblQuestionBody.appendChild(tr)
    })
}

const createRow = data => {
    let tr = document.createElement('tr');
    let tdEdit = document.createElement('td');
    let tdRemove = document.createElement('td');
    let tdId = document.createElement('td');
    let tdQuestionText = document.createElement('td');
    let tdSubjectName = document.createElement('td');

    let iconEdit = document.createElement('i');
    iconEdit.className = 'fa-solid operation-icon fa-edit text-warning';
    iconEdit.addEventListener('click', updateQuestionRow);
    iconEdit.setAttribute('data-row-id', data.id);
    iconEdit.setAttribute('data-bs-toggle', 'modal');
    iconEdit.setAttribute('data-bs-target', '#questionAddEditModal');

    let iconRemove = document.createElement('i');
    iconRemove.className = 'fa-solid operation-icon fa-trash-alt text-warning';
    iconRemove.addEventListener('click', deleteQuestionRow);
    iconRemove.setAttribute('data-row-id', data.id);

    tdEdit.appendChild(iconEdit);
    tdRemove.appendChild(iconRemove);

    tdId.textContent = data.id;
    tdQuestionText.textContent = data.questionsText;
    tdSubjectName.textContent = data.subjectName;

    tr.appendChild(tdEdit);
    tr.appendChild(tdRemove);
    tr.appendChild(tdId);
    tr.appendChild(tdQuestionText);
    tr.appendChild(tdSubjectName);

    return tr;
}

const updateQuestionRow = async (e) => {
    const id = e.target.dataset.rowId;
    const questions = await getAllQuestions();
    const questionToUpdate = questions.find(question => question.id === id);
    txtQuestionText.value = questionToUpdate.questionsText;
    txtQuestionSubjectName.value = questionToUpdate.subjectName;

    btnQuestionSave.removeEventListener("click", insertQuestionItem);

    const updateQuestionItem = async () => {
        const newtext = txtQuestionText.value;
        const newSubject = txtQuestionSubjectName.value;
        const updatedData = { id, questionsText: newtext, subjectName: newSubject };
        await updateQuestion(id, updatedData);
        await bindQuestions();
        btnQuestionSave.removeEventListener("click", updateQuestionItem);
        btnQuestionSave.addEventListener("click", insertQuestionItem);

        txtQuestionText.value = '';
        txtQuestionSubjectName.value = '';
    };

    btnQuestionSave.addEventListener('click', updateQuestionItem);
};
