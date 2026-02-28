import React from 'react'
import Contact from './Contact'

export default function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="container">
        <div className="row">
            {
                contacts.map(c =>(<Contact key={c.id} contact = {c} onEdit = {onEdit} onDelete = {onDelete}/>))
            }
        </div>
    </div>
  )
}
