//0 - ARREGLO DE USUARIOS

const USERS = [
    {id:'mapera95', 
    password: '123654', 
    name: 'Manuel', 
    first_last_name: 'Peñuñuri', 
    second_last_name: 'Ramírez',
    birthday: "20/02/1995",
    sex: "male",
    money: 450},

   {id:'mimasa96', 
    password: 'abcfed', 
    name: 'Mitzel', 
    first_last_name: 'Macías', 
    second_last_name: 'Sánchez',
    birthday: "10/06/1997",
    sex: "female",
    money: 615},

    {id:'jugaro93', 
    password: 'asddfq', 
    name: 'Juan', 
    first_last_name: 'García', 
    second_last_name: 'Rodríguez',
    birthday: "12/11/1993",
    sex: "male",
    money: 363},

];

//1 - REGISTRO DE USUARIO
//1 - CONSTANTES DE REGISTRO DE USUARIO PARA LA APERTURA Y CIERRE DE VENTANA EMERGENTE
const MODAL_CONTAINER = document.getElementById('modal_container'); //SE UTILIZA EN INICIO DE SESION Y REGISTRO DE USUARIO

const SIGN_UP_FIRST_BUTTON = document.getElementById('sign_up_first_button');
const SIGN_UP_CANCEL_BUTTON = document.getElementById('sign_up_cancel_button');
const MODAL_SIGN_UP_CONTAINER = document.getElementById('modal_sign_up_container');

//1.1.1 - DECLARACION DE DISPARADOR DE APERTURA DE VENTANA EMERGENTE DE REGISTRO DE USUARIO
SIGN_UP_FIRST_BUTTON.addEventListener('click',() => {
    MODAL_CONTAINER.style.display = 'flex';
    MODAL_SIGN_UP_CONTAINER.style.display = 'flex';
});

//1.1.2 - DECLARACION DE DISPARADOR DE CIERRE DE VENTANA EMERGENTE DE REGISTRO DE USUARIO
SIGN_UP_CANCEL_BUTTON.addEventListener('click',() => {
    MODAL_CONTAINER.style.display = 'none';
    MODAL_SIGN_UP_CONTAINER.style.display = 'none';
});

//2. INICIO DE SESION
//2.1 - CONSTANTES DE INICIO DE SESION PARA LA APERTURA Y CIERRE DE VENTANA EMERGENTE
const LOG_IN_FIRST_BUTTON = document.getElementById('log_in_first_button');
const LOG_IN_CANCEL_BUTTON = document.getElementById('log_in_cancel_button');
const MODAL_LOG_IN_CONTAINER = document.getElementById('modal_log_in_container');

//2.1.1 - DECLARACION DE DISPARADOR DE APERTURA DE VENTANA EMERGENTE DE INICIO DE SESION
LOG_IN_FIRST_BUTTON.addEventListener('click',() => {
    MODAL_CONTAINER.style.display = 'flex';
    MODAL_LOG_IN_CONTAINER .style.display = 'flex';
});

//2.1.2 - DECLARACION DE DISPARADOR PARA EL CIERRE DE VENTANA EMERGENTE DE INICIO DE SESION
LOG_IN_CANCEL_BUTTON.addEventListener('click',() => {
    MODAL_CONTAINER.style.display = 'none';
    MODAL_LOG_IN_CONTAINER .style.display = 'none';
});

//2.2 - VALIDACION DE USUARIO-CONTRASEÑA Y APERTURA DE PANEL DE USUARIO
//2.2.1 DEFINICION DE CONSTANTES
const LOG_IN_BUTTON = document.getElementById('log_in_button');
const USER_PANEL = document.getElementById('user_panel');
const USER_TOP_PANEL = document.getElementById('user_top_panel');
const USER_SECTION = document.getElementById('user_section');

//2.2.2 DEFINICION DE VARIABLES
let login_user;
let login_password;
let verified_user;
let verified_password;
let login_status;

//2.2.3 DECLARACION DE FUNCIONES

function userValidation(){
    return verified_user = USERS.find(user => user.id === login_user);
}

function passwordValidation(){
    if (verified_user.password === login_password){
        return verified_password = true;
    } else {
        return verified_password = false;
    }
}

function loginValidation(){
    if (userValidation(login_user) === undefined){
        return login_status = 1; // 1 = Id incorrecto o inexistente
    } else if (passwordValidation(login_password) === false){
        return login_status = 2; // 2 = Contraseña incorrecta
    } else {
        return login_status = 3; // 3 = Id y contraseña correctos
    }
}


//2.2.4 DECLARARION DE DISPARADOR PARA LA VALIDACION CON ALERTAS O APERTURA DE PANEL DE USUARIO
LOG_IN_BUTTON.addEventListener('click',() => {

    login_user = document.getElementById('log_in_id_input').value;
    login_password = document.getElementById('log_in_password_input').value;

    loginValidation()

    if (login_status === 3){
        USER_PANEL.style.display = 'flex';
        USER_TOP_PANEL.style.display = 'flex';
        USER_SECTION.style.display = 'grid';
    } else if(login_status === 2){
        alert('La contraseña no coincide con el id registrado')
    } else{
        alert('Usuario y contraseña incorrectos')
    }
});

//3 - CIERRE DE PANEL DE USUARIO

const EXIT_BUTTON = document.getElementById('exit_button');

EXIT_BUTTON.addEventListener('click',() => {
    USER_PANEL.style.display = 'none';
    USER_TOP_PANEL.style.display = 'none';
    USER_SECTION.style.display = 'none';
});

//4 - OPERACIONES DE USUARIO
//4.0 - DECLARACION DE CONSTANTES APLICABLES PARA CUALQUIER OPERACION

const MODAL_OPERATIONS_CONTAINER = document.getElementById('modal_operations_container');
const MODAL_OPERATIONS_PANEL = document.getElementById('modal_operations_panel');
const USER_OPERATION_TITLE = document.getElementById('user_operation_title');

//4.1 - CONSULTA DE SALDO
//4.1.1 - DECLARACION DE CONSTANTES Y VAIRABLES APLICABLES PARA LA CONSULTA DE SALDO

const CHECK_BALANCE_BUTTON = document.getElementById('checkBalance_button');
const CHECK_BALANCE_FIELD = document.getElementById('checkBalance_field');
const BALANCE_NUM = document.getElementById('balance_num');
const CHECK_BALANCE_APPROVAL_BUTTON = document.getElementById('checkBalance_approval_button');

//4.1.2 - DECLARACION DE FUNCIONES PARA LA CONSULTA DE SALDO

function start_checkBalanceOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'flex';
    MODAL_OPERATIONS_PANEL.style.display = 'flex';
    CHECK_BALANCE_FIELD.style.display = 'flex';
}

function end_checkBalanceOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'none';
    MODAL_OPERATIONS_PANEL.style.display = 'none';
    CHECK_BALANCE_FIELD.style.display = 'none';
}

function checkBalance_function(){

    USER_OPERATION_TITLE.textContent = 'Consulta'

    start_checkBalanceOperation()

    function checkBalance(){
        return BALANCE_NUM.textContent = verified_user.money;
    }

    checkBalance()
}

//4.1.3 - DECLARACION DE DISPARADORES DE FUNCIONES PARA LA CONSULTA DE SALDO

CHECK_BALANCE_BUTTON.addEventListener('click',() => {checkBalance_function()});
CHECK_BALANCE_APPROVAL_BUTTON.addEventListener('click',() => {end_checkBalanceOperation()})

//4.2 DEPOSITO
//4.2.1 - DECLARACION DE CONSTANTES Y VAIRABLES APLICABLES PARA LA REALIZACION DE DESPOSITOS
const DEPOSIT_FIELD = document.getElementById('deposit_field');
const DEPOSIT_BUTTON = document.getElementById('deposit_button');
const DEPOSIT_INPUT = document.getElementById('deposit_input');
const DEPOSIT_CANCEL_BUTTON = document.getElementById('deposit_cancel_button');
const DEPOSIT_APPROVAL_BUTTON = document.getElementById('deposit_approval_button');
let deposit_num;
let deposit_status;
let pre_balance;
let post_balance;

//4.2.2 - DECLARACION DE FUNCIONES PARA LA REALIZACION DE DESPOSITOS

function start_despositOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'flex';
    MODAL_OPERATIONS_PANEL.style.display = 'flex';
    DEPOSIT_FIELD.style.display = 'flex';
}

function end_depositOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'none';
    MODAL_OPERATIONS_PANEL.style.display = 'none';
    DEPOSIT_FIELD.style.display = 'none';
}

function depositValidation(){
    deposit_num = Number(DEPOSIT_INPUT.value);
    pre_balance = Number(verified_user.money);
    post_balance = pre_balance + deposit_num;
    if((post_balance) <= 990){
        return deposit_status = 1; //Depósito autorizado
    } else{
        return deposit_status = 2; //Depósito no autorizado
    }
}

function alertDepositStatus(){
    if(deposit_status == 1){
        return alert('Depósito realizado con éxito. Usted ingresó la cantidad de'+ ' ' + deposit_num + ', teniendo por saldo inicial la cantidad' + ' ' + pre_balance + ' ' + 'y alcanzando un saldo final de' + ' ' + post_balance) + '.';
    } else{
        return alert ('Depósito no autorizado. Su cuenta no puede tener más de 990 pesos. Le sugerimos depositar otra cantidad o cancelar la operación. Para más información consulte los términos del servicio.')
    }
}

function effectiveDeposit(){
    if(deposit_status == 1){
        return verified_user.money = post_balance
    }
}

function deposit(){
    depositValidation()
    alertDepositStatus()
    effectiveDeposit()
    end_depositOperation() 
}


//4.2.3 - DECLARACION DE DISPARADORES DE FUNCIONES PARA LA REALIZACION DE DESPOSITOS

DEPOSIT_BUTTON.addEventListener('click',() => {
    start_despositOperation()
    USER_OPERATION_TITLE.textContent = 'Depósito';
});

DEPOSIT_APPROVAL_BUTTON.addEventListener('click',() => {
    deposit()
});

//4.2.4 - CANCELACION DE OPERACION

DEPOSIT_CANCEL_BUTTON.addEventListener('click',() => {
    end_depositOperation() 
});

//4.3 - RETIRO
//4.3.1 - DECLARACION DE CONSTANTES Y VAIRABLES APLICABLES PARA LA REALIZACION DE RETIROS
const WITHDRAWAL_BUTTON = document.getElementById('withdrawal_button');
const WITHDRAWAL_FIELD = document.getElementById('withdrawal_field');
const DWITHDRAWAL_INPUT = document.getElementById('withdrawal_input');
const WITHDRAWAL_CANCEL_BUTTON= document.getElementById('withdrawal_cancel_button');
const WITHDRAWAL_APPROVAL_BUTTON = document.getElementById('withdrawal_approval_button');
let withdrawal_num;
let withdrawal_status;


//4.3.2 - DECLARACION DE FUNCIONES PARA LA REALIZACION DE RETIROS

function start_withdrawalOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'flex';
    MODAL_OPERATIONS_PANEL.style.display = 'flex';
    WITHDRAWAL_FIELD.style.display = 'flex';
}

function end_withdrawalOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'none';
    MODAL_OPERATIONS_PANEL.style.display = 'none';
    WITHDRAWAL_FIELD.style.display = 'none';
}

function withdrawalValidation(){
    withdrawal_num = Number(DWITHDRAWAL_INPUT.value);
    pre_balance = Number(verified_user.money);
    post_balance = pre_balance - withdrawal_num;
    if((post_balance) >= 10){
        return withdrawal_status = 1; //Retiro autorizado
    } else{
        return withdrawal_status = 2; //Retiro no autorizado
    }
}

function alertWithdrawalStatus(){
    if(withdrawal_status == 1){
        return alert('Retiro realizado con éxito. Usted retiró la cantidad de'+ ' ' + withdrawal_num + ', teniendo por saldo inicial la cantidad' + ' ' + pre_balance + ' ' + 'y dejando un saldo final de' + ' ' + post_balance) + '.';
    } else{
        return alert ('Retiro no autorizado. Su cuenta no puede tener menos de 10 pesos. Le sugerimos retirar otra cantidad o cancelar la operación. Para más información consulte los términos del servicio.')
    }
}

function effectiveWithdrawal(){
    if(withdrawal_status == 1){
        return verified_user.money = post_balance
    }
}

function withdrawal(){
    withdrawalValidation();
    alertWithdrawalStatus();
    effectiveWithdrawal();
    end_withdrawalOperation();
}

//4.3.3 - DECLARACION DE DISPARADORES DE FUNCIONES PARA LA REALIZACION DE RETIROS
WITHDRAWAL_BUTTON.addEventListener('click',() => {
    start_withdrawalOperation();
    USER_OPERATION_TITLE.textContent = 'Retiro';
});

WITHDRAWAL_APPROVAL_BUTTON.addEventListener('click',() => {
    withdrawal();
});

//4.3.4 - CANCELACION DE OPERACION
WITHDRAWAL_CANCEL_BUTTON.addEventListener('click',() => {
    end_withdrawalOperation();
});

//4.4 - TRANSFERENCIA
//4.4.1 - DECLARACION DE CONSTANTES Y VAIRABLES APLICABLES PARA LA REALIZACION DE TRANSFERENCIAS
const TRANSFER_BUTTON = document.getElementById('transfer_button');
const TRANSFER_FIELD = document.getElementById('transfer_field');
const ID_TRANSFER_INPUT = document.getElementById('id_transfer_input');
const NUM_TRANSFER_INPUT = document.getElementById('num_transfer_input');
const TRANSFER_CANCEL_BUTTON = document.getElementById('transfer_cancel_button');
const TRANFER_APPROVAL_BUTTON = document.getElementById('transfer_approval_button');
let registeredIdTransfer;
let verifiedIdTransfer;
let id_transferStatus;
let transferStatus;
let numTransfer;
let pre_balance_user;
let pre_balance_id;
let post_balance_user;
let post_balance_id;


//4.4.2 - DECLARACION DE FUNCIONES PARA LA REALIZACION DE TRANSFERENCIAS

function start_transferOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'flex';
    MODAL_OPERATIONS_PANEL.style.display = 'flex';
    TRANSFER_FIELD.style.display = 'flex';
}

function end_transferOperation(){
    MODAL_OPERATIONS_CONTAINER.style.display = 'none';
    MODAL_OPERATIONS_PANEL.style.display = 'none';
    TRANSFER_FIELD.style.display = 'none';
}

function idTransferValidation(){
    registeredIdTransfer = ID_TRANSFER_INPUT.value;
    return verifiedIdTransfer = USERS.find(user => user.id === registeredIdTransfer);
}

function idTransferStatus(){
    if (verifiedIdTransfer === undefined) {
        alert('Error. Id no identificado.')
    } else{
        return id_transferStatus = 1; // Usuario identificado.
    }
}

function numTransferValidation(){

    numTransfer = Number(NUM_TRANSFER_INPUT.value);
    pre_balance_user = Number(verified_user.money);
    pre_balance_id = Number(verifiedIdTransfer.money)
    post_balance_user = pre_balance_user - numTransfer;
    post_balance_id = pre_balance_id + numTransfer;

    if (id_transferStatus = 1 && post_balance_id <= 990 && post_balance_user >= 10){
        return transferStatus = 1; //Transferencia válida.
    } else if(id_transferStatus = 1 && post_balance_id > 990){
        return transferStatus = 2; // Transferencia inválida, el id de destino tendría más de 990 pesos.
    } else if(id_transferStatus = 1 && post_balance_user < 10){
        return transferStatus = 3; // Transferencia inválida, el id de origen tendría menos de 10 pesos.
    } else{
        return transferStatus = 4; // Transferencia inválida, otro tipo de error.
    }
}

function alertTransferStatus(){
    if(transferStatus == 1){
        return alert('Transferencia realizada con éxito. Usted transfirió un total de' + ' ' + 
        numTransfer + ' ' + 'pesos, a la cuenta con id' + ' ' + verifiedIdTransfer.id + '. Su saldo previo a la operación fue de' + ' ' + pre_balance_user + ' '+ 'pesos. Actualmente dipone en su cuenta de' + ' ' + post_balance_user + ' ' + 'pesos.')
    } else if(transferStatus == 2){
        return alert('Transferencia no autorizada, de conformidad con los términos del servicio. Le sugerimos intentar con una cantidad menor o cancelar la operación.')
    } else if(transferStatus == 3){
        return alert('Transferencia no autorizada. Su cuenta no puede tener menos de 10 pesos. Le sugerimos intentar otra cantidad o cancelar la operación. Para más información consulte los términos del servicio')
    } else if(transferStatus == 4){
        return alert('Lo sentimos, hubo un error en la operación.')
    }
}

function effectiveTransfer_1(){
    if(transferStatus == 1){
        return verified_user.money = post_balance_user;
    }
}

function effectiveTransfer_2(){
    if(transferStatus == 1){
        return verifiedIdTransfer.money = post_balance_id;
    }
}

function transfer(){
    idTransferValidation()
    idTransferStatus()
    numTransferValidation()
    alertTransferStatus()
    effectiveTransfer_1()
    effectiveTransfer_2()
    end_transferOperation()
}


//4.4.3 - DECLARACION DE DISPARADORES DE FUNCIONES PARA LA REALIZACION DE TRANSFERENCIAS
TRANSFER_BUTTON.addEventListener('click',() => {
    start_transferOperation();
    USER_OPERATION_TITLE.textContent = 'Transferencia';
});

TRANFER_APPROVAL_BUTTON.addEventListener('click',() => {
    transfer();
});


//4.4.4 - CANCELACION DE OPERACION
TRANSFER_CANCEL_BUTTON.addEventListener('click',() => {
    end_transferOperation();
});
