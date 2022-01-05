public with sharing class PageToDoc {
    @InvocableMethod(label='Page to doc')
    public static void pageToDoc(List<Id> caseIds) {
        System.debug(caseIds);
        PageReference pdf = Page.page1_421a;
        Attachment attach = new Attachment();
        Blob body = pdf.getContentAsPDF();
        attach.Body = body;
        attach.Name = '421 Application document';
        attach.ParentId = caseIds[0];
        insert attach;

    }
}
