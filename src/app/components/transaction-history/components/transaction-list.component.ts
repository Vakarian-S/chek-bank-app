import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../../domain/transaction/interfaces/transaction.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionListComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  displayedColumns: string[] = ['date', 'description', 'credit', 'debit', 'balance'];
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: Transaction | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
