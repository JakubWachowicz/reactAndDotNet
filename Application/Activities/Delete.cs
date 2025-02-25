﻿using MediatR;
using Persistence;

namespace Application.Activities
{
     public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;

            public Handler(DataContext context)
            {
                this.context = context;
            }

            public async Task Handle(Command request,CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync(request.Id);
                if (activity != null) 
                {
                    context.Remove(activity);
                    await context.SaveChangesAsync(); 
                }
            }
        }
    }
}
