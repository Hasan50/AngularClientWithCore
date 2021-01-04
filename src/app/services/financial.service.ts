import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app.config';
import { AuthenticationService } from './authentication.service';
import { Base } from './base';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';

@Injectable()
export class FinancialService extends Base
{

    constructor(private http: HttpClient, private config: AppConfig, authenticationService: AuthenticationService)
    {
        super(authenticationService);
    }
    //Get Method


    public SaveInvoice(username: string, password: string)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/SaveInvoice', { username: username, password: password })
            .pipe(map(res =>
            {
                if (res)
                {

                }
                return res;
            }));
    }

    public SaveBillCollection(username: string, password: string)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/SaveBillCollection', { username: username, password: password })
            .pipe(map(res =>
            {
                if (res)
                {

                }
                return res;
            }));
    }
    public SaveVoucherType(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/SaveVoucherType/', aModel);
    }
    public SaveVoucher(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/SaveVoucher/', aModel);
    }

    GetInvoice(id)
    {
        const action = 'FinancialApi/GetInvoice' + id;
        return this.http.get(this.config.apiUrl + action);
    }

    GetInvoiceList()
    {
        const action = 'FinancialApi/GetInvoiceList';
        return this.http.get(this.config.apiUrl + action);
    }

    GetVoucherTypeList()
    {
        const action = 'FinancialApi/GetVoucherTypeList';
        return this.http.get(this.config.apiUrl + action);
    }


    GetVoucher(id)
    {
        const action = 'FinancialApi/GetVoucher?id=' + id;
        return this.http.get(this.config.apiUrl + action);
    }

    GetVoucherList()
    {
        const action = 'FinancialApi/GetVoucherList';
        return this.http.get(this.config.apiUrl + action);
    }
    GetVoucherListWithFilter(voucherTypeId, startDate, endDate)
    {
        const action = 'FinancialApi/GetVoucherListWithFilter?voucherTypeId=' + voucherTypeId + '&startDate=' + startDate + '&endDate=' + endDate;
        return this.http.get(this.config.apiUrl + action);
    }
    GetBillCollections()
    {
        const action = 'FinancialApi/GetBillCollectionList';
        return this.http.get(this.config.apiUrl + action);
    }

    UpdateAsDeposited(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/UpdateAsDeposited', aModel);
    }

    ConveyancePaid(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/ConveyancePaid', aModel);
    }

    GetMonthlyExpenses(month, year)
    {
        const action = "FinancialApi/GetMonthlyExpenses?year=" + year + "&month=" + month;
        return this.http.get(this.config.apiUrl + action);
    }

    GetExpenseSummary(month, year)
    {
        const action = "FinancialApi/GetExpenseSummary?year=" + year + "&month=" + month;
        return this.http.get(this.config.apiUrl + action);
    }

    GetIncomeSummary(month, year)
    {
        const action = "FinancialApi/GetIncomeSummary?year=" + year + "&month=" + month;
        return this.http.get(this.config.apiUrl + action);
    }

    GetMonthlyIncomes(month, year)
    {
        const action = "FinancialApi/GetMonthlyIncomes?year=" + year + "&month=" + month;
        return this.http.get(this.config.apiUrl + action);
    }

    GetExpenseIncomeSummaryReport(year)
    {
        const action = "ReportApi/GetExpenseIncomeSummaryReport?year=" + year;
        return this.http.get(this.config.apiUrl + action);
    }

    GetIncome(id)
    {
        const action = "FinancialApi/GetIncome?id=" + id;
        return this.http.get(this.config.apiUrl + action);
    }

    GetIncomeList()
    {
        const action = "FinancialApi/GetIncomeList";
        return this.http.get(this.config.apiUrl + action);
    }

    public SaveIncomeType(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/SaveIncomeType/', aModel);
    }

    public SaveIncome(aModel)
    {
        return this.http.post<any>(this.config.apiUrl + 'FinancialApi/SaveIncome/', aModel);
    }

    GetIncomeType(id)
    {
        const action = "FinancialApi/GetIncomeType?id=" + id;
        return this.http.get(this.config.apiUrl + action);
    }

    GetIncomeTypeList()
    {
        const action = "FinancialApi/GetIncomeTypeList";
        return this.http.get(this.config.apiUrl + action);
    }

}
