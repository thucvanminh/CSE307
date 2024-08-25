// $(document).ready(function () {


//     $.get("http://139.180.213.49/getdata-student.php",
//         {
//             Type: "Student"
//         },
//         function (randomdata) {
//             console.log(randomdata);
//             let conca = "";
//             for (const each of randomdata) {
//                 conca += `<tr>
//                            <th scope="row">${each.ID}</th>
//                               <td>${each.Name}</td>
//                                <td>${each.ID}</td>
//                                <td><button>Edit</button>
//                                     <button>Delete</button>
//                               </td>
//                            </tr>`;
//             }
//             $("tbody").append(conca);

//         }, "json");


//     $.get("http://139.180.213.49/getdata-student.php",
//         {
//             Type: "Class"
//         },
//         function (randomdata) {
//             console.log(randomdata);
//             let conca = "";
//             let selectClass = "";
//             for (const each of randomdata) {
//                 conca += `<li><button>${each}</button></li>`;
//                 selectClass += `<option value="${each}">${each}</option>`;
//             }
//             $(".class-list").append(conca);
//             $(".form-select").append(selectClass);

//         }, "json");

//     function addStudent(student) {
//         let newStudentRow = `<tr>
//                                    <th scope="row">${student.ID}</th>
//                                    <td>${student.Name}</td>
//                                    <td>${student.ID}</td>
//                                    <td><button>Edit</button>
//                                         <button>Delete</button>
//                                    </td>
//                                  </tr>`;
//         $("tbody").prepend(newStudentRow);
//     }
//     $("#studentForm").on("submit", function (event) {
//         event.preventDefault();

//         let studentID = $("#studentID").val();
//         let studentName = $("#studentName").val();
//         let studentEmail = $("#studentEmail").val();
//         let studentClass = $("#inputState").val();

//         // Tạo đối tượng student mới
//         let newStudent = {
//             ID: studentID,
//             Name: studentName,
//             Email: studentEmail,
//             Class: studentClass
//         };

//         // Thêm student mới vào đầu danh sách
//         addStudent(newStudent);

//         // Xóa nội dung các input sau khi thêm
//         $("#studentID").val('');
//         $("#studentName").val('');
//         $("#studentEmail").val('');
//         $("#inputState").val('');
//     });
// });
$(document).ready(function () {

    function loadStudents() {
        $.get("http://139.180.213.49/getdata-student.php",
            {
                Type: "Student"
            },
            function (randomdata) {
                console.log(randomdata);

                // Sap xep theo ten truoc khi show ra

                randomdata.sort(function (a, b) {
                    return a.Name.localeCompare(b.Name);
                });
                let conca = "";
                for (const each of randomdata) {
                    
                    conca += `<tr>
                               <th scope="row">${each.ID}</th>
                               <td>${each.Name}</td>
                               <td>${each.ID}</td>
                               <td><button>Edit</button>
                                    <button>Delete</button>
                               </td>
                             </tr>`;
                }
                $("tbody").html(conca);
            },
            "json"
        );
    }

    function loadClasses() {
        $.get("http://139.180.213.49/getdata-student.php",
            {
                Type: "Class"
            },
            function (randomdata) {
                console.log(randomdata);
                let conca = "";
                let selectClass = "";
                for (const each of randomdata) {
                    conca += `<li><button>${each}</button></li>`;
                    selectClass += `<option value="${each}">${each}</option>`;
                }
                $(".class-list").html(conca);
                $(".form-select").html(selectClass);
            },
            "json"
        );
    }


    function addStudent(student) {
        let conca = `<tr>
                               <th scope="row">${student.ID}</th>
                               <td>${student.Name}</td>
                               <td>${student.ID}</td>
                               <td><button>Edit</button>
                                    <button>Delete</button>
                               </td>
                             </tr>`;
        $("tbody").prepend(conca);
        // reloadStudent(student);
    }

    loadStudents();
    loadClasses();

    $("#studentForm").on("submit", function (event) {
        event.preventDefault();

        const studentID = $("#studentID").val();
        const studentName = $("#studentName").val();
        const studentEmail = $("#studentEmail").val();
        const studentClass = $("#inputState").val();

        const newStudent = {
            ID: studentID,
            Name: studentName,
            Email: studentEmail,
            Class: studentClass
        };

        addStudent(newStudent);

        $("#studentID").val('');
        $("#studentName").val('');
        $("#studentEmail").val('');
        $("#inputState").val('');
    });
});

// Them hoc sinh moi 
$(document).ready(function () {
    $(".update-new-button").click(function () {
        var studentIDnew = $("#studentID").val();
        var studentNamenew = $("#studentName").val();
        $("tbody").prepend(`<tr>
            <th scope="row">${studentIDnew}</th>
            <td>${studentNamenew}</td>
            <td>${studentIDnew}</td>
            <td><button>Edit</button>
                 <button>Delete</button>
            </td>
          </tr>`);
    });

});
