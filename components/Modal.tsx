'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { RxCross1 } from 'react-icons/rx';
import type { ReactNode } from 'react';

export default function Modal({ open, onOpenChange, children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }) {
	return <Dialog.Root open={open} onOpenChange={onOpenChange}>{children}</Dialog.Root>;
}

function ModalContent({ title, children }: { title: string; children: ReactNode }) {
	return <Dialog.Portal><Dialog.Overlay className="project-overlay" />
		<Dialog.Content className="project-dialog" aria-describedby={undefined}>
			<div className="dialog-heading"><Dialog.Title>{title}</Dialog.Title><Dialog.Close aria-label="Close project details"><RxCross1 aria-hidden="true" /></Dialog.Close></div>
			{children}
		</Dialog.Content>
	</Dialog.Portal>;
}
Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
