function spart(was) {

  var ApplicantsData = [];
    for (var j = 0; j < parseInt(was); j++) {
        ApplicantsData[j] = {};
        if (j>0) {
            ApplicantsData[j]["Relationship"] = $("#Relationship_" + j).val();
        }
        k = j + 1;
        ApplicantsData[j]["ApplicantSerialNo"] = k.toString();
        ApplicantsData[j]["FirstName"] = $("#FirstName_" + j).val();
        ApplicantsData[j]["LastName"] = $("#LastName_" + j).val();
        var datefield = $("#DateOfBirth_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
            ApplicantsData[j]["ServerDateOfBirth"] =  moment($("#DateOfBirth_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD')
        }
        ApplicantsData[j]["PlaceOfBirth"] = $("#PlaceOfBirth_" + j).val();
        ApplicantsData[j]["NationalityId"] = $("#NationalityId_" + j).val();
        ApplicantsData[j]["PassportType"] = $("#PassportType_" + j).val();
        ApplicantsData[j]["PassportNo"] = $("#PassportNo_" + j).val();
        datefield = $("#IssueDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
            ApplicantsData[j]["ServerPassportIssueDate"] = moment($("#IssueDate_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }
        datefield = $("#ExpiryDate_" + j).val();
        if (datefield !== null && datefield !== '' && datefield !== undefined) {
            ApplicantsData[j]["ServerPassportExpiryDate"] = moment($("#ExpiryDate_" + j).val(),'YYYY-MM-DD').format('YYYY-MM-DD');
        }

        ApplicantsData[j]["IssuePlace"] = $("#IssuePlace_" + j).val();
        ApplicantsData[j]["IssueCountryId"] = $("#IssueCountryId_" + j).val();
        ApplicantsData[j]["ParentId"] = "5a3fb2d8-a30f-42e9-b1f2-60f266f32caf";
        ApplicantsData[j]["ApplicantId"] = $("#ApplicantId_" + j).val();
        ApplicantsData[j]["Id"] = $("#ApplicantId_" + j).val();
    }

  var detailsString = JSON.stringify(ApplicantsData);
    $("#ApplicantsDetailsList").val(detailsString);
    SUBFORMTZ();
}
