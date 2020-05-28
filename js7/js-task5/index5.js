const InfoOfMe = {
    MyName: Alex,
    MyAge: 15,
    MyGender: "male",
    married: false,
    };
    let str = "";
    for(Info in InfoOfMe){
        console.log(`Ключ - ${Info}, Значение - ${InfoOfMe[Info]}`);
        str += InfoOfMe[Info];
    }
    console.log(`Все значения - ${str}`);